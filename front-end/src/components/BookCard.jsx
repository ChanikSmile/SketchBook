import React, { useState } from 'react';

import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function BookCard({ book }) {
  const [showModal, setShowModal] = useState(false);

  const handleModalShow = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <Card style={{ width: '25rem' }} onClick={handleModalShow}>
        <Card.Img variant="top" src={book.bookcover} style={{ width: '25rem', height: '30rem' }} />
        <Card.Body>
          <Card.Title style={{ textAlign: 'right' }}>{book.title}</Card.Title>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={handleModalClose} size="xl">
        <Modal.Header closeButton>
          {/* <Modal.Title>{book.title}</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          <div style={{ display: 'flex' }}>
            <div style={{ flex: 1 }}>
              <img src={book.bookcover} alt={book.title} style={{ width: '30rem', height: '35rem' }} />
            </div>
            <div style={{ flex: 2, padding: '10px 40px 10px 40px' }}>
              <h3>{book.title}</h3>
              <h5 style={{ textAlign: 'right' }}>{book.writer}</h5>
              <br />
              <p>{book.summary}</p>

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '100px' }}>
                <Button
                  variant="outline-primary"
                  style={{
                    width: '200px',
                    borderColor: '#9D4FE0',
                    marginBottom: '10px',
                    color: '#9D4FE0',
                    ':hover': {
                      backgroundColor: '#9D4FE0',
                      color: '#ffffff',
                    },
                  }}
                  onClick={() => console.log('첫 번째 버튼 클릭')}
                >
                  캐릭터 출력하기
                </Button>
                <Button
                  variant="outline-primary"
                  style={{
                    width: '200px',
                    borderColor: '#9D4FE0',
                    color: '#9D4FE0',
                    ':hover': {
                      backgroundColor: '#9D4FE0',
                      color: '#ffffff',
                    },
                  }}
                  onClick={() => console.log('두 번째 버튼 클릭')}
                >
                  시작하기
                </Button>
              </div>

           </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default BookCard;
