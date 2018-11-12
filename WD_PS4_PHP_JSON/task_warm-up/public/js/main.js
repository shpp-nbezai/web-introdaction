const TASKS_ARRAY = [
  {
    taskName: "Task 01",
    image: "./images/1.jpg",
    sectionClass: "section-task-01"
  },
  {
    taskName: "Task 02",
    image: "./images/2.jpg",
    sectionClass: "section-task-02"
  },
  {
    taskName: "Task 03",
    image: "./images/3.jpg",
    sectionClass: "section-task-03"
  },
  {
    taskName: "Task 04",
    image: "./images/4.jpg",
    sectionClass: "section-task-04"
  },
  {
    taskName: "Task 05",
    image: "./images/5.jpg",
    sectionClass: "section-task-05"
  },
  {
    taskName: "Task 06",
    image: "./images/6.jpg",
    sectionClass: "section-task-06"
  },
];

$(function() {
  const animationSpeed = 10;
  const flip = $("#flip");
  const panel = $("#panel");
  let userImageIndex = 0;
  createDropdownList();

  flip.on("click", function() {
    panel.slideToggle(animationSpeed, function() {
      $(this).stop(true, false);
    });
  });

  $(".dropdown-button").click(function() {
    panel.slideUp(animationSpeed);
    let taskName = $(this).text();
    TASKS_ARRAY.map( item => {
      if ( taskName.includes(item.taskName)) {
        setActiveTask(item.taskName);
      }
    });
  });

  $(document).on("click", function(event) {
    if (!flip.is(event.target)) {
      panel.slideUp(animationSpeed);
    }
  });

  function createDropdownList() {
    const taskList = TASKS_ARRAY.reduce((list, item) =>
      ( list + `<li class = "dropdown-button">
                <img
                  class = "button-ico"
                  src="${ item.image }"
                  alt="${ item.taskName }">
                ${ item.taskName }
              </li>`
      ), "");
    panel.append(taskList);
  }
});

function setActiveTask ( taskName ) {
  console.log("task work - " + taskName);
  if (taskName === "") {
    console .log("task is null");
    return null;
  }
  let activeTask;
  let activeImage = "";
  let hiddenTask;
  TASKS_ARRAY.map( item => {
    if ( taskName === item.taskName) {
      activeTask  = $("." + item.sectionClass);
      activeTask.removeClass("is-hidden");
      activeTask.addClass("is-visible");
      activeImage = item.image;
    } else {
      hiddenTask = $("." + item.sectionClass);
      hiddenTask.removeClass("is-visible");
      hiddenTask.addClass("is-hidden");
    }
  });
  $(".active-task").text(taskName).prepend(
    `<img
      class = "button-ico"
      src="${ activeImage }"
      alt="${ taskName }">`
  );

}
