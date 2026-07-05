import { io } from "socket.io-client";
import socket from "./socket"

AFRAME.registerComponent("pinhandler", {
  //Schema enables customization
  schema: {},
  init: function () {
    let socketComp = document.querySelector("#socket");
    let socketCompAtt = socketComp.getAttribute("socket");
    let socket = socketCompAtt.socket;

    console.log("PIN HANDLER ACTIVATED")

    let marker0 = document.getElementById("marker0");
    let marker1 = document.getElementById("marker1");
    let marker2 = document.getElementById("marker2");
    let marker3 = document.getElementById("marker3");
    let marker4 = document.getElementById("marker4");

    socket.on("eggOverview", async (data) => {
      // console.log("DATAA TIC", data)
      data.forEach((marker) => {
        // console.log("marker", marker)
        let markerId = marker.id;
        switch (markerId) {
          case 1:
            // console.log("marker.taken", marker.taken)
            if(marker.taken == true){
              // console.log("marker elem", marker0)
              marker0.setAttribute("visible", false);
            } 
            break;
          case 2:
            if(marker.taken == true){
              // console.log("marker elem", marker1)
              marker1.setAttribute("visible", false);
            } 
            break;
          case 3:
            if(marker.taken == true){
              // console.log("marker elem", marker2)
              marker2.setAttribute("visible", false);
            } 
            break;
          case 4:
            if(marker.taken == true){
              // console.log("marker elem", marker3)
              marker3.setAttribute("visible", false);
            } 
            break;
          case 5:
            if(marker.taken == true){
              // console.log("marker elem", marker4)
              marker4.setAttribute("visible", false);
            } 
            break;
        }
      })
    })


  },
  update: function () { },
  tick: function () { },
  remove: function () { },
  pause: function () { },
  play: function () { },
});

