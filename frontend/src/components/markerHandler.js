import { io } from "socket.io-client";
import socket from "./socket"

AFRAME.registerComponent("markerhandler", {
  //Schema enables customization
  schema: {},
  init: function () {
    //Create Primitive
    let socketComp = document.querySelector("#socket");
    let socketCompAtt = socketComp.getAttribute("socket");
    let socket = socketCompAtt.socket;

    let sceneEl = document.querySelector("a-scene");

    this.el.sceneEl.addEventListener("markerFound", (e) => {

      let markerEl = e.target;
      let elemId = markerEl.getAttribute("id")

      // markerEl.firstElementChild.setAttribute("visible", false);

      // let modEl = e.target.fir

      if (markerEl.firstElementChild.getAttribute("id") == "campus") {
        // let marker1 = document.getElementById("pin0");
        // console.log("campus detected",marker1 )

      } else {
        markerEl.firstElementChild.setAttribute("position", "0 0 0");
        markerEl.firstElementChild.object3D && markerEl.firstElementChild.object3D.traverse((child) => {
          if (child.type === 'Mesh') {
            const material = child.material;
            // Do stuff with the material
            material.transparent = true;
            material.opacity = 0.3;
            console.log("traversed", material);
            // material.map = null;
          }
        })

        markerEl.firstElementChild.addEventListener("model-loaded", (e) => {
          console.log("model loaded")
          markerEl.firstElementChild.object3D.traverse((child) => {
            if (child.type === 'Mesh') {
              const material = child.material;
              // Do stuff with the material
              material.transparent = true;
              material.opacity = 0.3;
              console.log("traversed", material);
              // material.map = null;
            }
          })
        })

        console.log("elemIdelemId", e.target)

        socket.emit("eggStatus", undefined, status => {
          let triggerSelected = undefined;
          let index = undefined;
          console.log("arr", status.trigger)

          status.trigger.forEach(((e, i) => {
            if (e.id == elemId) {
              triggerSelected = e;
              index = i;
              console.log("triggerSelected", triggerSelected.taken)
            }
          }))

          if (triggerSelected.taken == false) {
            
              markerEl.firstElementChild.object3D.traverse((child) => {
                if (child.type === 'Mesh') {
                  const material = child.material;
                  // Do stuff with the material
                  material.transparent = true;
                  material.opacity = 1;
                  console.log("traversed", material);
                  // material.map = null;
                }
              })

            console.log("markerEl", markerEl)

            status.trigger[index].taken == true;
            let soundEl = document.createElement("a-sound");

            socket.emit("updateEgg", elemId, cb => {
              alert("table updated")
            });

            //Discovery Sound FX
            soundEl.setAttribute("src", "https://cdn.glitch.global/91eba6f9-a9d4-45db-afeb-7115df7cf197/sound1.mp3?v=1650871234471");
            soundEl.setAttribute("position", "0 0 0");
            soundEl.setAttribute("loop", false);
            soundEl.setAttribute("autoplay", true);

            sceneEl.appendChild(soundEl);

            setTimeout(function () {
              //your code to be executed after 1 second
              let soundEl2 = document.createElement("a-sound");
              soundEl2.setAttribute("src", "https://cdn.glitch.global/91eba6f9-a9d4-45db-afeb-7115df7cf197/sound2.mp3?v=1650872767123");
              soundEl2.setAttribute("position", "0 0 0");
              soundEl2.setAttribute("loop", false);
              soundEl2.setAttribute("autoplay", true);

              sceneEl.appendChild(soundEl2);

              markerEl.firstElementChild.setAttribute("animation", {
                property: "position",
                to: "0 0 -10",
                dur: 1000,
                easing: "linear",
                dir: "alternate",
              });
            }, 4000);
          }
        });
      }



    })

    // socket.on("ping", (data)=> {
    //     console.log("DATAAA", data);
    //   //   cubeEl.setAttribute("color", colors[data]);
    // })

    //Populate Scene
  },
  update: function () { },
  tick: function () { },
  remove: function () { },
  pause: function () { },
  play: function () { },
});

