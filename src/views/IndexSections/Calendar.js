import React, { useEffect, useRef, useState } from "react";

import classnames from "classnames";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";

import {
  Button,
  Container,
  Form,
  FormGroup,
  Input,
  Modal,
  Row,
} from "reactstrap";
import { db } from "firebaseConfig";
import { child, get, getDatabase, ref } from "firebase/database";
import { DateTimePicker, TimePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { duration } from "moment";
import moment from "moment-timezone";
import { TextField } from "@mui/material";
import { updateEvent, deleteEvent, createEvent } from "views/admin/utils";

export function Calendar(props) {

  const [events, setEvents] = useState([]);
  const [modalType, setModalType] = useState("ViewEvent");
  const [modalData, setModalData] = useState(undefined);
  const [modalActive, setModalActive] = useState(false);

  const [start, setStart] = useState(undefined);
  const [end, setEnd] = useState(undefined);

  const startRef = useRef();
  const endRef = useRef();

  const fetchEvents = () => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `events`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          let o = snapshot.val();

          Object.keys(o).forEach((key) => {
            o[key].uid = key;
          });

          setEvents(Object.values(o));
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleEventClick = (arg) => {
    setModalData(arg);
    setStart(moment(arg?.event.startStr).utc());
    setEnd(moment(arg?.event.endStr).utc());
    if (props.admin) {
      setModalType("EditEvent");
    } else {
      setModalType("ViewEvent");
    }

    toggleModal();
  };

  const toggleModal = () => {
    setModalActive(!modalActive);
  };

  const handleDateClick = (arg) => {
    if (props.admin) {
      setModalData(arg);
      setStart(moment(modalData?.event.startStr).utc());
      setEnd(moment(modalData?.event.endStr).utc());
      setModalType("ViewDate");
      toggleModal();
    }
  };

  const saveChanges = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);

    const payload = {
      title: data.get("title").toString(),
      notes: data.get("notes").toString(),
      room: data.get("room").toString(),
      rsvp: data.get("rsvp").toString(),
      start: moment(startRef.current.children[1].children[0].value)
        .subtract(duration(5).asHours())
        .toISOString(true),
      end: moment(endRef.current.children[1].children[0].value)
        .subtract(duration(5).asHours())
        .toISOString(true),
    };

    const id = modalData.event.extendedProps.uid;

    updateEvent(payload, id);
    fetchEvents();
    toggleModal();
  };

  const handleDelete = () => {
    deleteEvent(modalData.event.extendedProps.uid);
    fetchEvents();
    toggleModal();
  };

  const handleCreateEvent = () => {
    if (props.admin) {
      setModalType("CreateEvent");
      toggleModal();
    }
  };

  const create = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);

    const payload = {
      title: data.get("title").toString(),
      notes: data.get("notes").toString(),
      room: data.get("room").toString(),
      rsvp: data.get("rsvp").toString(),
      start: moment(startRef.current.children[1].children[0].value)
        .subtract(duration(5).asHours())
        .toISOString(true),
      end: moment(endRef.current.children[1].children[0].value)
        .subtract(duration(5).asHours())
        .toISOString(true),
    };
    createEvent(payload);

    toggleModal();
    fetchEvents();
  };

  const inp = {
    left: "prev,next",
    center: "title",
    right: "timeGridWeek,dayGridMonth,listMonth", // list year/all?
  };

  var dateOptions = {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  const ViewEvent = () => {
    return (
      <>
        <div className="modal-header">
          <h5 className="modal-title" id="eventModalLabel">
            {modalData?.event.title}
            <p className="text-muted h6">
              {new Date(modalData?.event.startStr).toLocaleString(
                "en-US",
                dateOptions
              )}
              {modalData?.event.extendedProps?.room &&
                " in " + modalData?.event.extendedProps.room}
            </p>
          </h5>
          <button
            aria-label="Close"
            className="close"
            data-dismiss="modal"
            type="button"
            onClick={() => toggleModal()}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        {modalData?.event.extendedProps?.notes && (
          <div className="modal-body">
            {modalData.event.extendedProps.notes}
          </div>
        )}
        <div className="modal-footer">
          <Button
            color="secondary"
            data-dismiss="modal"
            type="button"
            onClick={() => toggleModal()}
          >
            Close
          </Button>
          {modalData?.event.extendedProps?.rsvp && (
            <a
              href={modalData.event.extendedProps.rsvp}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
              role="button"
              onClick={() => toggleModal()}
            >
              RSVP
            </a>
          )}
        </div>
      </>
    );
  };

  const ViewDate = () => {
    return (
      <>
        <div className="modal-header">
          <h5 className="modal-title" id="eventModalLabel"></h5>
          <button
            aria-label="Close"
            className="close"
            data-dismiss="modal"
            type="button"
            onClick={() => toggleModal()}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>

        <div className="modal-footer">
          <Button
            color="secondary"
            data-dismiss="modal"
            type="button"
            onClick={() => toggleModal()}
          >
            Close
          </Button>
        </div>
      </>
    );
  };

  const EditEvent = () => {
    return (
      <Form onSubmit={(ev) => saveChanges(ev)}>
        <div className="modal-header">
          <h5 className="modal-title" id="eventModalLabel">
            <TextField
              id="title"
              size="small"
              type="text"
              name="title"
              className="form-control"
              style={{ width: "25vw", maxWidth: "50%" }}
              defaultValue={modalData.event.title}
              label="Title"
              required={true}
            ></TextField>
            <Row
              className="text-muted h6 d-flex align-items-center flex-wrap no-gutters my-2"
              style={{ gap: 5 }}
            >
              <LocalizationProvider
                dateAdapter={AdapterMoment}
                dateLibInstance={moment}
              >
                <DateTimePicker
                  // defaultValue={moment(modalData?.event.startStr).utc()}
                  label="Start"
                  name="start"
                  required={true}
                  slotProps={{
                    textField: { size: "small", required: true },
                    actionBar: { actions: ["cancel", "accept"] },
                  }}
                  value={start}
                  timezone="America/Chicago"
                  // onChange={(e) => setStart(e)}
                  ref={startRef}
                />
                to
                {modalData?.event.endStr ? (
                  <DateTimePicker
                    // defaultValue={}
                    label="End"
                    slotProps={{
                      textField: { size: "small", error: false },
                      actionBar: { actions: ["clear", "cancel", "accept"] },
                    }}
                    value={end}
                    ref={endRef}
                    timezone="America/Chicago"
                    // onChange={(e) => setEnd(e)}
                  />
                ) : (
                  <DateTimePicker
                    label="End"
                    slotProps={{
                      textField: { size: "small", error: false },
                      actionBar: { actions: ["clear", "cancel", "accept"] },
                    }}
                    value={end}
                    timezone="America/Chicago"
                    // onChange={(e) => setEnd(e)}
                    ref={endRef}
                  />
                )}
              </LocalizationProvider>
              in
              <TextField
                id="room"
                size="small"
                type="text"
                name="room"
                className="form-control"
                style={{ width: "25vw", maxWidth: "50%" }}
                defaultValue={modalData.event.extendedProps.room}
                label="Room"
                required={true}
                // value={room}
                // onChange={(e) => setRoom(e.target.value)}
              ></TextField>
              <span className="text-muted" style={{ fontSize: "0.75rem" }}>
                * required
              </span>
            </Row>
          </h5>
          <button
            aria-label="Close"
            className="close"
            data-dismiss="modal"
            type="button"
            onClick={() => toggleModal()}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <div className="modal-body">
          <Input
            name="notes"
            type="textarea"
            className="text-dark"
            rows="3"
            placeholder="Notes"
            defaultValue={modalData.event.extendedProps.notes}
            // value={notes}
            // onChange={(e) => setNotes(e.target.value)}
          ></Input>
          <TextField
            id="rsvp"
            size="small"
            type="text"
            name="rsvp"
            className="form-control"
            style={{ width: "25vw", maxWidth: "50%", marginTop: 5 }}
            defaultValue={modalData.event.extendedProps.rsvp}
            label="RSVP Link"
          ></TextField>
        </div>
        <div className="modal-footer">
          <Button
            color="secondary"
            data-dismiss="modal"
            type="button"
            onClick={() => toggleModal()}
          >
            Close
          </Button>
          <Button
            color="danger"
            data-dismiss="modal"
            type="button"
            onClick={handleDelete}
          >
            Delete
          </Button>
          <Button color="primary" role="submit">
            Save Changes
          </Button>
        </div>
      </Form>
    );
  };

  const CreateEvent = () => {
    return (
      <Form onSubmit={(ev) => create(ev)}>
        <div className="modal-header">
          <h5 className="modal-title" id="eventModalLabel">
            <TextField
              id="title"
              size="small"
              type="text"
              name="title"
              className="form-control"
              style={{ width: "25vw", maxWidth: "50%" }}
              label="Title"
              required={true}
            ></TextField>
            <Row
              className="text-muted h6 d-flex align-items-center flex-wrap no-gutters my-2"
              style={{ gap: 5 }}
            >
              <LocalizationProvider dateAdapter={AdapterMoment}>
                <DateTimePicker
                  label="Start"
                  name="start"
                  required={true}
                  slotProps={{
                    textField: { size: "small", required: true },
                    actionBar: { actions: ["cancel", "accept"] },
                  }}
                  value={start}
                  timezone="America/Chicago"
                  // onChange={(e) => setStart(e)}
                  ref={startRef}
                />
                to
                <DateTimePicker
                  label="End"
                  slotProps={{
                    textField: { size: "small", error: false },
                    actionBar: { actions: ["clear", "cancel", "accept"] },
                  }}
                  value={end}
                  timezone="America/Chicago"
                  // onChange={(e) => setEnd(e)}
                  ref={endRef}
                />
              </LocalizationProvider>
              in
              <TextField
                id="room"
                size="small"
                type="text"
                name="room"
                className="form-control"
                style={{ width: "25vw", maxWidth: "50%" }}
                label="Room"
                required={true}
              ></TextField>
              <span className="text-muted" style={{ fontSize: "0.75rem" }}>
                * required
              </span>
            </Row>
          </h5>
          <button
            aria-label="Close"
            className="close"
            data-dismiss="modal"
            type="button"
            onClick={() => toggleModal()}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <div className="modal-body">
          <Input
            name="notes"
            type="textarea"
            className="text-dark"
            rows="3"
            placeholder="Notes"
          ></Input>
          <TextField
            id="rsvp"
            size="small"
            type="text"
            name="rsvp"
            className="form-control"
            style={{ width: "25vw", maxWidth: "50%", marginTop: 5 }}
            label="RSVP Link"
          ></TextField>
        </div>
        <div className="modal-footer">
          <Button
            color="secondary"
            data-dismiss="modal"
            type="button"
            onClick={() => toggleModal()}
          >
            Close
          </Button>
          <Button color="primary" role="submit">
            Create
          </Button>
        </div>
      </Form>
    );
  };

  return (
    <Container
      className={classnames("p-sm-5 p-3", {
        admin: props.admin,
      })}
      id="calendar"
      style={{ height: "90vh" }}
    >
      {props.admin && (
        <Button className="btn-default" onClick={handleCreateEvent}>
          Create an Event
        </Button>
      )}
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={inp}
        timeZone="America/Chicago"
        events={events}
        eventClick={handleEventClick}
        themeSystem="bootstrap5"
        height={"100%"}
      />
      <Modal
        className="modal-dialog-centered"
        size="lg"
        isOpen={modalActive}
        toggle={() => toggleModal()}
      >
        {
          {
            ViewEvent: <ViewEvent />,
            ViewDate: <ViewDate />,
            EditEvent: <EditEvent />,
            CreateEvent: <CreateEvent />,
          }[modalType]
        }
      </Modal>
    </Container>
  );
}
