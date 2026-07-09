/**
 * home.js — home page entry module
 * ---------------------------------------------------------------------------
 * Builds the "Meet Sue" gallery carousel from data and shows a small
 * rotating taste of the featured testimonials.
 */
import { galleryImages } from './data/site.data.js';
import { createCarousel } from './carousel.js';

const gallery = document.querySelector('.carousel');
if (gallery) createCarousel(gallery, galleryImages);
