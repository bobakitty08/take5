import React, { useState } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';

const MoneyComponent = () => {
    const [showTip, setShowTip] = useState(false);
    const [showLearn, setShowLearn] = useState(false);
    const [showFinanceTracker, setShowFinanceTracker] = useState(false);
    const [showMoneyGoals, setShowMoneyGoals] = useState(false);

    const handleCloseTip = () => setShowTip(false);
    const handleShowTip = () => setShowTip(true);

    const handleCloseLearn = () => setShowLearn(false);
    const handleShowLearn = () => setShowLearn(true);

    const handleCloseFinanceTracker = () => setShowFinanceTracker(false);
    const handleShowFinanceTracker = () => setShowFinanceTracker(true);

    const handleCloseMoneyGoals = () => setShowMoneyGoals(false);
    const handleShowMoneyGoals = () => setShowMoneyGoals(true);

    return (
        <Card style={{ backgroundColor: '#228B22', borderColor: '#228B22' }}>
            <Card.Body>
                <Card.Title>Money</Card.Title>
                <Card.Text>
                    Stay on top of your finances with our personal budgeting and productivity
                    software.
                </Card.Text>
                <Button variant="primary" onClick={handleShowTip}>
                    Tip
                </Button>
                <Button variant="primary" onClick={handleShowLearn}>
                    Learn
                </Button>
                <Button variant="primary" onClick={handleShowFinanceTracker}>
                    Finance Tracker
                </Button>
                <Button variant="primary" onClick={handleShowMoneyGoals}>
                    Money Goals
                </Button>
            </Card.Body>
            <Modal show={showTip} onHide={handleCloseTip}>
                <Modal.Header closeButton>
                    <Modal.Title>Financial Tip</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Start by tracking your expenses to get a better understanding of where your
                        money is going.
                    </p>
                    <Button variant="secondary" onClick={handleCloseTip}>
                        Close
                    </Button>
                </Modal.Body>
            </Modal>
            <Modal show={showLearn} onHide={handleCloseLearn}>
                <Modal.Header closeButton>
                    <Modal.Title>Learn</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Learn about how finances work, the stock market, and how to start
                        investing in stocks.
                    </p>
                    <p>
                        Understand the 50-30-20 budget rule and other financial tips.
                    </p>
                    <Button variant="secondary" onClick={handleCloseLearn}>
                        Close
                    </Button>
                </Modal.Body>
            </Modal>
            <Modal show={showFinanceTracker} onHide={handleCloseFinanceTracker}>
                <Modal.Header closeButton>
                    <Modal.Title>Finance Tracker</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Track your spending, earnings, categories, loans, and deposits to keep
                        track of your expenses.
                    </p>
                    <Button variant="secondary" onClick={handleCloseFinanceTracker}>
                        Close
                    </Button>
                </Modal.Body>
            </Modal>
            <Modal show={showMoneyGoals} onHide={handleCloseMoneyGoals}>
                <Modal.Header closeButton>
                    <Modal.Title>Money Goals</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Jot down your financial goals and ideas in a bullet-point format and
                        cross them out as you tackle each one.
                    </p>
                    <Button variant="secondary" onClick={handleCloseMoneyGoals}>
                        Close
                    </Button>
                </Modal.Body>
            </Modal>
        </Card> 
    );
};

export default MoneyComponent;

