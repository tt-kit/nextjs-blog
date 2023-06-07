import { useEffect } from "react";
import styles from "./home.module.css";

export default function Home() {
  useEffect(() => {
    // 获取需要拖动的div元素节点
    var divs = document.querySelectorAll(".draggable");

    // 给每个div元素节点添加拖动事件
    for (var i = 0; i < divs.length; i++) {
      var div = divs[i];
      div.addEventListener("mousedown", startDrag);
    }

    // 定义拖动事件处理函数
    function startDrag(event) {
      console.log("event------", event);
      var div = event.target;
      var rect = div.getBoundingClientRect();
      console.log("event.clientX---rect.left", event.clientX, rect.left);
      var offsetX = event.clientX - rect.left;
      var offsetY = event.clientY - rect.top;

      document.addEventListener("mousemove", drag);
      document.addEventListener("mouseup", stopDrag);

      function drag(event) {
        console.log();
        div.style.left = event.clientX - offsetX + "px";
        div.style.top = event.clientY - offsetY + "px";

        // 检测碰撞
        for (var j = 0; j < divs.length; j++) {
          if (divs[j] !== div) {
            var rect1 = div.getBoundingClientRect();
            var rect2 = divs[j].getBoundingClientRect();

            if (
              rect1.left < rect2.right &&
              rect1.right > rect2.left &&
              rect1.top < rect2.bottom &&
              rect1.bottom > rect2.top
            ) {
              div.classList.add(styles.collided);
              divs[j].classList.add(styles.collided);
            } else {
              div.classList.remove(styles.collided);
              divs[j].classList.remove(styles.collided);
            }
          }
        }
      }

      function stopDrag(event) {
        document.removeEventListener("mousemove", drag);
        document.removeEventListener("mouseup", stopDrag);
      }
    }
  }, []);
  return (
    <div>
      <div id="div1" className={`${styles.draggable} draggable`}></div>
      <div id="div2" className={`${styles.draggable} draggable`}></div>
    </div>
  );
}
