import React from 'react'

const contact = () => (
  <div>
    <div className="headline"> Let's Get in Touch!</div>
    <div className="contact_container">
      <div className="container-div">
        <form className="form" action="" method="POST">
          <div className="contact_text">Your name</div>
          <div className="box_cont">
            <input required className="form_box" type="text" name="name" />
          </div>
          <div className="contact_text">Your email</div>
          <div className="box_cont">
            <input required className="form_box" type="email" name="_replyto" />
          </div>
          <div className="contact_text">Describe your project/question</div>
          <div className="box_cont">
            <textarea required className="summary_box" name="summary"></textarea>
          </div>
          <input className="submit_button" type="submit" value="Submit"></input>
        </form>
      </div>
      <div className="contact-container-div">
        <a target="_blank" href="https://www.linkedin.com/in/irenehakes">
          <img className="contact_link" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iNjdweCIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDY3IDY3OyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNjcgNjciIHdpZHRoPSI2N3B4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48cGF0aCBkPSJNNTAuODM3LDQ4LjEzN1YzNi40MjVjMC02LjI3NS0zLjM1LTkuMTk1LTcuODE2LTkuMTk1ICBjLTMuNjA0LDAtNS4yMTksMS45ODMtNi4xMTksMy4zNzRWMjcuNzFoLTYuNzljMC4wOSwxLjkxNywwLDIwLjQyNywwLDIwLjQyN2g2Ljc5VjM2LjcyOWMwLTAuNjA5LDAuMDQ0LTEuMjE5LDAuMjI0LTEuNjU1ICBjMC40OS0xLjIyLDEuNjA3LTIuNDgzLDMuNDgyLTIuNDgzYzIuNDU4LDAsMy40NCwxLjg3MywzLjQ0LDQuNjE4djEwLjkyOUg1MC44Mzd6IE0yMi45NTksMjQuOTIyYzIuMzY3LDAsMy44NDItMS41NywzLjg0Mi0zLjUzMSAgYy0wLjA0NC0yLjAwMy0xLjQ3NS0zLjUyOC0zLjc5Ny0zLjUyOHMtMy44NDEsMS41MjQtMy44NDEsMy41MjhjMCwxLjk2MSwxLjQ3NCwzLjUzMSwzLjc1MywzLjUzMUgyMi45NTl6IE0zNCw2NCAgQzE3LjQzMiw2NCw0LDUwLjU2OCw0LDM0QzQsMTcuNDMxLDE3LjQzMiw0LDM0LDRzMzAsMTMuNDMxLDMwLDMwQzY0LDUwLjU2OCw1MC41NjgsNjQsMzQsNjR6IE0yNi4zNTQsNDguMTM3VjI3LjcxaC02Ljc4OXYyMC40MjcgIEgyNi4zNTR6IiBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7ZmlsbDojMDEwMTAxOyIvPjwvc3ZnPg==" />
        </a>
        <a target="_blank" href="https://github.com/irene-hakes">
          <img className="contact_link" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iNjdweCIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDY3IDY3OyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNjcgNjciIHdpZHRoPSI2N3B4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48cGF0aCBkPSJNMjAuNTQzLDM0LjU2OGMtMC4wNTQsMCwwLjU5MiwxLjM2NywwLjYxLDEuMzY3ICBjMS40MSwyLjUxNiw0LjEyOCw0LjA4LDguNzEzLDQuNTE0Yy0wLjY1NCwwLjQ4OC0xLjQ0LDEuNDE0LTEuNTQ5LDIuNDg0Yy0wLjgyMywwLjUyMy0yLjQ3OCwwLjY5Ni0zLjc2NCwwLjI5NyAgYy0xLjgwMy0wLjU1OS0yLjQ5My00LjA2Ni01LjE5Mi0zLjU2NmMtMC41ODQsMC4xMDctMC40NjgsMC40ODYsMC4wMzcsMC44MDljMC44MjMsMC41MjMsMS41OTcsMS4xNzgsMi4xOTQsMi41NzEgIGMwLjQ1OSwxLjA3LDEuNDIzLDIuOTgxLDQuNDczLDIuOTgxYzEuMjEsMCwyLjA1OC0wLjE0MywyLjA1OC0wLjE0M3MwLjAyMywyLjczMSwwLjAyMywzLjc5M2MwLDEuMjI1LTEuNjgyLDEuNTctMS42ODIsMi4xNTkgIGMwLDAuMjMzLDAuNTU3LDAuMjU1LDEuMDA0LDAuMjU1YzAuODg0LDAsMi43MjMtMC43MjUsMi43MjMtMS45OThjMC0xLjAxMSwwLjAxNy00LjQxLDAuMDE3LTUuMDA2YzAtMS4zLDAuNzA5LTEuNzEyLDAuNzA5LTEuNzEyICBzMC4wODgsNi45NC0wLjE2OSw3Ljg3MmMtMC4zMDIsMS4wOTQtMC44NDcsMC45MzktMC44NDcsMS40MjdjMCwwLjcyNiwyLjIxNCwwLjE3OSwyLjk0OC0xLjQxNmMwLjU2Ny0xLjIzOSwwLjMxOS04LjA1LDAuMzE5LTguMDUgIGwwLjYwNS0wLjAxMmMwLDAsMC4wMzQsMy4xMTcsMC4wMTMsNC41NDJjLTAuMDIxLDEuNDc2LTAuMTIzLDMuMzQyLDAuNzY5LDQuMjIyYzAuNTg2LDAuNTc5LDIuNDg0LDEuNTk0LDIuNDg0LDAuNjY2ICBjMC0wLjUzOS0xLjA0LTAuOTgyLTEuMDQtMi40NDF2LTYuNzE1YzAuODMxLDAsMC43MDYsMi4yMDgsMC43MDYsMi4yMDhsMC4wNjEsNC4xMDNjMCwwLTAuMTg0LDEuNDk0LDEuNjQ1LDIuMTE5ICBjMC42NDUsMC4yMjMsMi4wMjUsMC4yODMsMi4wOS0wLjA5YzAuMDY1LTAuMzczLTEuNjYyLTAuOTI4LTEuNjc4LTIuMDg0Yy0wLjAxLTAuNzA3LDAuMDMyLTEuMTE5LDAuMDMyLTQuMTg3ICBjMC0zLjA2OC0wLjQxOS00LjIwMi0xLjg4LTUuMTA2YzQuNTA4LTAuNDU1LDcuMjk5LTEuNTUxLDguNjU4LTQuNDg2YzAuMTA2LDAuMDAzLDAuNTU1LTEuMzcxLDAuNDk2LTEuMzcxICBjMC4zMDUtMS4xMDgsMC40Ny0yLjQxOSwwLjUwMi0zLjk3MWMtMC4wMDgtNC4yMS0yLjA1OC01LjY5OS0yLjQ1MS02LjM5OGMwLjU4LTMuMTg3LTAuMDk4LTQuNjM3LTAuNDEyLTUuMTM1ICBjLTEuMTYyLTAuNDA2LTQuMDQxLDEuMDQ1LTUuNjE1LDIuMDY3Yy0yLjU2NC0wLjczNy03Ljk4Ni0wLjY2Ni0xMC4wMTksMC4xOWMtMy43NTEtMi42MzktNS43MzYtMi4yMzUtNS43MzYtMi4yMzUgIHMtMS4yODMsMi4yNTktMC4zMzksNS41NjVjLTEuMjM0LDEuNTQ2LTIuMTU0LDIuNjQtMi4xNTQsNS41MzlDMTkuOTA2LDMxLjgzLDIwLjEwMiwzMy4yOTIsMjAuNTQzLDM0LjU2OHogTTMzLDY0ICBDMTYuNDMyLDY0LDMsNTAuNTY4LDMsMzRDMywxNy40MzEsMTYuNDMyLDQsMzMsNHMzMCwxMy40MzEsMzAsMzBDNjMsNTAuNTY4LDQ5LjU2OCw2NCwzMyw2NHoiIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtmaWxsOiMwMTAxMDE7Ii8+PC9zdmc+" />
        </a>
      </div>
    </div>
  </div >
)

export default contact
