<template>

  <div id="experience" class="background-alt">
    <h2 class="heading">Experiences</h2>
    <div id="experience-timeline">
      <div class="vtimeline-point">
        <div class="vtimeline-icon"><i class="fa fa-map-marker"></i></div>
        <div class="vtimeline-block">
          <span class="vtimeline-date">
              July 2018 – Feb 2020
            </span>
          <div data-date="July 2018 – Feb 2020" class="vtimeline-content">
            <h3>Stem Disintermedia</h3>
            <h4>FullStack Software Developer</h4>
            Key Responsibilities:
            <ol>
              <li>Front-end development using React.js</li>
              <li>Backend development using Python and NodeJs</li>
              <li>Building visualisation using D3js</li>
              <li>Building deployment pipelines</li>
              <li>
                Maintaining and adding new features to the music distribution platform
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div class="vtimeline-point">
        <div class="vtimeline-icon"><i class="fa fa-map-marker"></i></div>
        <div class="vtimeline-block">
          <span class="vtimeline-date">
              July 2017 – April 2020
            </span>
          <div data-date="July 2017 – April 2020" class="vtimeline-content">
            <h3>Andela</h3>
            <h4>Software Developer</h4>
            <ul>
              <li>
                I Helped with the development of internal Information system to enable developers manage their progress information like
                skills and projects.
              </li>
              <li>
                Participated in internal mentorship programs(Simulation and BootCamp) to mentor junior developers.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style>

  #experience {
    padding: 50px 15px;
    text-align: center;
    border-bottom: 1px solid #dcd9d9;
  }

  #experience h2 {
    color: #374054;
  }

  #experience-timeline {
    margin: 30px auto 0 auto;
    position: relative;
    max-width: 1000px;
  }

  #experience-timeline:before {
    position: absolute;
    content: '';
    top: 0;
    bottom: 0;
    left: 303px;
    right: auto;
    height: 100%;
    width: 3px;
    background: #35343433;
    z-index: 0;
  }

  #experience-timeline:after {
    position: absolute;
    content: '';
    width: 3px;
    height: 40px;
    background: #35343433;
    background: linear-gradient(to bottom, #35343433, rgba(53, 52, 52, 0));
    top: 100%;
    left: 303px;
  }

  .vtimeline-content {
    margin-left: 350px;
    background: #fff;
    border: 1px solid #e6e6e6;
    padding: 15px;
    border-radius: 3px;
    text-align: left;
  }

  .vtimeline-content h3 {
    font-size: 1.5em;
    font-weight: 300;
    color: #374054;
    display: inline-block;
    margin: 0;
  }

  .vtimeline-content h4 {
    font-size: 1.2em;
    font-weight: 300;
    color: #7e8890;
    margin: 0 0 15px 0;
  }

  .vtimeline-content p {
    color: #000000;
    font-size: 0.9em;
    margin: 0;
  }

  .vtimeline-point {
    position: relative;
    display: block;
    vertical-align: top;
    margin-bottom: 30px;
  }

  .vtimeline-icon {
    position: relative;
    color: #fff;
    width: 50px;
    height: 50px;
    background: #3c3c3ce8;
    border-radius: 50%;
    float: left;
    z-index: 99;
    margin-left: 280px;
  }

  .vtimeline-icon i {
    display: block;
    font-size: 2em;
    margin-top: 10px;
  }

  .vtimeline-date {
    width: 260px;
    text-align: right;
    position: absolute;
    left: 0;
    top: 10px;
    font-weight: 300;
    color: #374054;
  }

</style>
