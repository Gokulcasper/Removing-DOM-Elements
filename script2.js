function removeItem(event) {
  const eventList = event.target.parentNode.parentNode;

  eventList.remove(); // New Way

  //   eventList.parentNode.removeChild(eventList); // Old Way
}
