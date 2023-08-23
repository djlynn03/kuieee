import React, { useState } from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid"; // a plugin!
import listPlugin from "@fullcalendar/list";

import { Container } from "reactstrap";
import { db } from "firebaseConfig";
import { child, get, getDatabase, ref } from "firebase/database";

// const events = [
//   {
//     groupId: "999",
//     title: "General Meeting",
//     start: "2023-08-29T18:00:00+00:00",
//     color: "green",
//   },
//   {
//     groupId: "999",
//     title: "General Meeting",
//     start: "2023-09-12T18:00:00+00:00",
//     color: "green",
//   },
//   {
//     title: "Engineering EXPO",
//     start: "2024-02-25",
//     end: "2024-02-27",
//   },
// ];

export class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { events: [] };
  }

  componentDidMount = () => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `events`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          this.setState({
            events: snapshot.val(),
          });
          console.log(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  handleEventClick = (arg) => {
    console.log(arg);
  };

  render() {
    const inp = {
      left: "prev,next",
      center: "title",
      right: "timeGridWeek,dayGridMonth,listMonth", // list year/all?
    };
    return (
      <Container>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
          initialView="dayGridMonth"
          headerToolbar={inp}
          timeZone="American/Chicago"
          events={this.state.events}
          eventClick={this.handleEventClick}
        />
      </Container>
    );
  }
}
