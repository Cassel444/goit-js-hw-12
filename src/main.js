

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { createMarkup } from "./js/render-functions.js";
import { getInform } from "./js/pixabay-api.js";

const form = document.querySelector(".form-inline");
const list = document.querySelector(".js-list");
const loader = document.querySelector(".loader");