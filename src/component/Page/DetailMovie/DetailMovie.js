import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useFetch from "../../../features/useFetch";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const DetailMovie = () => {
  const { slug: movieID } = useParams();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const API_KEY = "e9e9d8da18ae29fc430845952232787c";
  const DetailMovie = useFetch(
    `https://api.themoviedb.org/3/movie/${movieID}?api_key=${API_KEY}`
  );
  const trailerMovie=useFetch(` https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY} `)
  const findTrailer = trailerMovie.find((item)=> item.type==="Trailer")
  console.log(findTrailer);

  return (
    <div>
      <Container>
        <Row>
          <Col lg={6}>
            <img
              src={`https://image.tmdb.org/t/p/w500${DetailMovie.poster_path}`}
              alt="Deadpool &amp; Wolverine"
            />
          </Col>
          <Col lg={6}>
            <div class="col-lg-9">
              <h1>{DetailMovie.original_title}</h1>
              <div class="yearPro d-flex align-items-center gap-2">
                <p class="year mb-0">2024-07-24</p>
                <p class="kind">
                  {DetailMovie.genres &&
                    DetailMovie.genres.map((item) => item.name).join(",")}
                </p>
                <p class="time mb-0">
                  <i class="fa-regular fa-clock"></i> {DetailMovie.runtime}
                </p>
              </div>
              <div class="rate d-flex align-items-center">
                <p class="number-rate">{DetailMovie.vote_average}</p>
                <p class="user">user score</p>
                <p class="playtrailer" onClick={handleShow}>
                  <i class="fa-solid fa-play"></i> Play trailer
                </p>
              </div>
              <h3>Can You Bury Your Past?</h3>
              <h2>Overview</h2>
              <p class="overview">
                A listless Wade Wilson toils away in civilian life with his days
                as the morally flexible mercenary, Deadpool, behind him. But
                when his homeworld faces an existential threat, Wade must
                reluctantly suit-up again with an even more reluctant Wolverine.
              </p>
            </div>
          </Col>
        </Row>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <iframe
              width="100%"
              height="315"
              src={`https://www.youtube.com/embed/${findTrailer.key}`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
};

export default DetailMovie;
