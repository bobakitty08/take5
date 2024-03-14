import React, { useState } from 'react';
import { Card, Button, Modal, ProgressBar } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';

const MentalHealth = () => {
  const [showTip, setShowTip] = useState(false);
  const [showSelfEvaluation, setShowSelfEvaluation] = use1State(false);
  const [showGraph, setShowGraph] = useState(false);
  const [showMeditation, setShowMeditation] = useState(false);
  const [subjects, setSubjects] = useState([]);
  const [dailyStreak, setDailyStreak] = useState(0);
  const [mood, setMood] = useState(0);

  const handleSubjects = () => {
    // First time user only
    setSubjects(['First Time User', 'Anxiety', 'Depression', 'Stress']);
  };

  const handleTip = () => {
    setShowTip(true);
  };

  const handleSelfEvaluation = () => {
    setShowSelfEvaluation(true);
  };

  const handleGraph = () => {
    setShowGraph(true);
  };

  const handleMeditation = () => {
    setShowMeditation(true);
  };

  const handleCloseTip = () => {
    setShowTip(false);
  };

  const handleCloseSelfEvaluation = () => {
    setShowSelfEvaluation(false);
  };

  const handleCloseGraph = () => {
    setShowGraph(false);
  };

  const handleCloseMeditation = () => {
    setShowMeditation(false);
  };

  const handleLogin = () => {
    setDailyStreak(prevStreak => prevStreak + 1);
  };

  const handleMoodChange = (e) => {
    setMood(e.target.value);
  };

  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Mental Health</Card.Title>
          <Card.Text>
            Welcome to the Mental Health component! Here, you can learn about mental health, track your mood, and engage in guided meditation.
          </Card.Text>
          <Button variant="primary" onClick={handleSubjects}>
            First time user only
          </Button>
          <Button variant="primary" onClick={handleTip}>
            Tip
          </Button>
          <Button variant="primary" onClick={handleSelfEvaluation}>
            Self-Evaluation test
          </Button>
          <Button variant="primary" onClick={handleGraph}>
            See graph over time
          </Button>
          <Button variant="primary" onClick={handleMeditation}>
            Guided meditation
          </Button>
        </Card.Body>
      </Card>

      <Modal show={showTip} onHide={handleCloseTip}>
        <Modal.Header closeButton>
          <Modal.Title>Tip</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Tip: Take a 5-minute walk outside every hour.</p>
        </Modal.Body>
      </Modal>

      <Modal show={showSelfEvaluation} onHide={handleCloseSelfEvaluation}>
        <Modal.Header closeButton>
          <Modal.Title>Self-Evaluation test</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>How are you feeling today?</p>
          <input type="range" min="1" max="10" value={mood} onChange={handleMoodChange} />
        </Modal.Body>
      </Modal>

      <Modal show={showGraph} onHide={handleCloseGraph}>
        <Modal.Header closeButton>
          <Modal.Title>Mood Graph</Modal.Title>
        </Modal.Header>
        <Modal.Body>
      
  </Modal.Body>

export default MentalHealthComponent;
