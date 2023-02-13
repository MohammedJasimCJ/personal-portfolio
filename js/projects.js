const data = [
  {
    title: "Demo",
    source:"https://github.com/",
    external:"https:/",
    desc: "demo card",
    tech:[
        {stack: "Html"},
        {stack: "Css"},
        {stack: "Js"},
    ]
  },
  {
    title: "Clinist {Clinic appointment System}",
    source:"https://github.com/",
    external:"https:",
    desc: "A website for booking appointmoints in clinics",
    tech:[
        {stack: "Html"},
        {stack: "Css"},
        {stack: "PHP"},
        {stack: "MySQL"},
    ]
  },
  {
    title: "Portfolio",
    source:"https:/",
    external:"https",
    desc: "Association for Computing ",
    tech:[
        {stack: "JAVASCRIPT"},
        {stack: "Css"},
        {stack: "HTML"},
    ]
  },
 
];

const projectContainer = document.getElementById("projectContents");
const projects = data.map((project, i) => {
  return (
    `  
    <div class="col-lg-6 " key='${i}'>
      <div class="card shadow">
        <div class="card-body">
          <div class="d-flex justify-content-between">
            <h5>Featured Project</h5>
            <div class="links">
              <a href="${project.source}" target="_blank"><i class="fa fa-github " aria-hidden="true"></i></a>
              <a href="${project.external}" target="_blank"><i class="fa fa-external-link  " aria-hidden="true"></i></a>
            </div>
          </div>
          <h3>${project.title}</h3>
          <p class="mt-3">
           ${project.desc}
          </p>
          ${project.tech.map((stack, i)=>{
            return ` 
            <span class="badge rounded-pill ">${stack.stack}</span>
            `
          })}
        </div>
      </div>
    </div>`
  )
}).join('');

projectContents.innerHTML = projects;
