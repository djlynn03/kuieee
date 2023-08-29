import { ref, getDatabase, update, remove, push } from "firebase/database";

import "firebase/app";
const db = getDatabase();

export function updateEvent(payload, id) {
  update(ref(db, `events/${id}`), payload)
    .then((res) => {
    })
    .catch((error) => {
      console.error("Error updating event:", error);
    });
}

export function deleteEvent(id) {
  remove(ref(db, `events/${id}`))
    .then((res) => {
    })
    .catch((error) => {
      console.error("Error deleting event:", error);
    });
}

export function createEvent(payload) {
  push(ref(db, `events/`), payload)
    .then((res) => {
    })
    .catch((error) => {
      console.error("Error creating event:", error);
    });
}

export function isoDateWithoutTimeZone(date) {
  if (date == null) return date;
  var timestamp = date.getTime() - date.getTimezoneOffset() * 60000;
  var correctDate = new Date(timestamp);
  // correctDate.setUTCHours(0, 0, 0, 0); // uncomment this if you want to remove the time
  return correctDate.toISOString();
}
