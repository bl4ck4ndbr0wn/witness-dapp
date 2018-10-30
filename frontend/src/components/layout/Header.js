import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div class="responsive-header">
        <div class="mh-head first Sticky">
          <span class="mh-btns-left">
            <a class="" href="#menu">
              <i class="fa fa-align-justify" />
            </a>
          </span>
          <span class="mh-text">
            <a href="newsfeed.html" title="">
              <img src="images/logo2.png" alt="" style={{ height: "34px" }} />
            </a>
          </span>
          <span class="mh-btns-right">
            <a href="#" title="Notification" data-ripple="">
              <i class="ti-bell" />
              <span>20</span>
            </a>
          </span>
        </div>
        <nav id="menu" class="res-menu">
          <ul>
            <li>
              <span>Home</span>
              <ul>
                <li>
                  <a href="landing.html" title="">
                    landing page
                  </a>
                </li>
                <li>
                  <a href="newsfeed.html" title="">
                    news feed
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <span>Time Line</span>
              <ul>
                <li>
                  <a href="time-line.html" title="">
                    timeline
                  </a>
                </li>
                <li>
                  <a href="timeline-friends.html" title="">
                    timeline friends
                  </a>
                </li>
                <li>
                  <a href="timeline-groups.html" title="">
                    timeline groups
                  </a>
                </li>
                <li>
                  <a href="timeline-pages.html" title="">
                    timeline pages
                  </a>
                </li>
                <li>
                  <a href="timeline-photos.html" title="">
                    timeline photos
                  </a>
                </li>
                <li>
                  <a href="timeline-videos.html" title="">
                    timeline videos
                  </a>
                </li>
                <li>
                  <a href="fav-page.html" title="">
                    favourit page
                  </a>
                </li>
                <li>
                  <a href="groups.html" title="">
                    groups page
                  </a>
                </li>
                <li>
                  <a href="page-likers.html" title="">
                    Likes page
                  </a>
                </li>
                <li>
                  <a href="people-nearby.html" title="">
                    people nearby
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <span>Account Setting</span>
              <ul>
                <li>
                  <a href="create-fav-page.html" title="">
                    create fav page
                  </a>
                </li>
                <li>
                  <a href="edit-account-setting.html" title="">
                    edit account setting
                  </a>
                </li>
                <li>
                  <a href="edit-interest.html" title="">
                    edit-interest
                  </a>
                </li>
                <li>
                  <a href="edit-password.html" title="">
                    edit-password
                  </a>
                </li>
                <li>
                  <a href="edit-profile-basic.html" title="">
                    edit profile basics
                  </a>
                </li>
                <li>
                  <a href="edit-work-eductation.html" title="">
                    edit work educations
                  </a>
                </li>
                <li>
                  <a href="messages.html" title="">
                    message box
                  </a>
                </li>
                <li>
                  <a href="inbox.html" title="">
                    Inbox
                  </a>
                </li>
                <li>
                  <a href="notifications.html" title="">
                    notifications page
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <span>More pages</span>
              <ul>
                <li>
                  <a href="404.html" title="">
                    404 error page
                  </a>
                </li>

                <li>
                  <a href="faq.html" title="">
                    faq's page
                  </a>
                </li>
                <li>
                  <a href="insights.html" title="">
                    insights
                  </a>
                </li>
                <li>
                  <a href="knowledge-base.html" title="">
                    knowledge base
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="about.html" title="">
                about
              </a>
            </li>
            <li>
              <a href="contact.html" title="">
                contact
              </a>
            </li>
            <li>
              <a href="widgets.html" title="">
                Widgts
              </a>
            </li>
          </ul>
        </nav>{" "}
      </div>
    );
  }
}
