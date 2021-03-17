<template>

  <div id="lead">
    <div id="lead-content">
      <h1>Josiah Mokobo</h1>
      <h2>Software Developer</h2>
      <a class="btn-rounded-white" href="https://github.com/josiahmokob0/documents/raw/master/resume.pdf">
        Download Resume
      </a>
    </div>
    <div id="lead-overlay"></div>
    <div id="lead-down">
      <span>
        <i aria-hidden="true" class="fa fa-chevron-down"></i>
      </span>
    </div>
  </div>

</template>

<style scoped>

  #lead {
    background: url('../images/lead-bg.jpg');
    object-fit: cover;
    position: static;

    height: 100vh;
    min-height: 500px;
    max-height: 1080px;
    padding: 15px;
    overflow: hidden;
  }
  #lead-content {
    position: absolute;
    z-index: 10;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
  #lead-content h1,
  #lead-content h2 {
    margin: 0;
  }
  #lead-content h1 {
    color: #fff;
    font-weight: 900;
    font-size: 5em;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    line-height: 0.9em;
  }
  #lead-content h2 {
    color: white;
    font-weight: 500;
    font-size: 2.25em;
    margin-bottom: 15px;
  }
  #lead-overlay {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(50, 49, 49, 0.8);
    z-index: 1;
  }
  #lead-down {
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    text-align: center;
    z-index: 10;
    bottom: 15px;
    color: #fff;
  }
  #lead-down span {
    cursor: pointer;
    display: block;
    margin: 0 auto;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    border: 3px solid rgba(117, 115, 115, 0.2);
    text-align: center;
  }
  #lead-down i {
    animation: pulsate 1.5s ease;
    animation-iteration-count: infinite;
    padding-top: 5px;
  }
  @keyframes pulsate {
    0% {
      transform: scale(1, 1);
    }
    50% {
      transform: scale(1.2, 1.2);
    }
    100% {
      transform: scale(1, 1);
    }
  }

</style>
