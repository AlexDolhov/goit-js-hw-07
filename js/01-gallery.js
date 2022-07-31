import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

// const items = galleryItems;

// console.log(items);

const galaryContainer = document.querySelector(".gallery");

const galaryMarkup = createGalaryMarkup(galleryItems);

galaryContainer.insertAdjacentHTML("beforeend", galaryMarkup);
galaryContainer.addEventListener("click", onGalaryContainerClick);

function createGalaryMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
            </a>
        </div>`;
    })
    .join("");
}

function onGalaryContainerClick(e) {
  e.preventDefault();

  // console.dir(e.target);

  if (e.target.nodeName !== "IMG") {
    return;
  }

  const onClickedImageUrl = e.target.dataset.source;

  const instance = basicLightbox.create(`<img src ="${onClickedImageUrl}"/>`, {
    onShow: () => {
      document.querySelector(".gallery").onclick;

      document.addEventListener("keydown", (e) => {
        if (e.code === "Escape") {
          instance.close();
        }
      });
    },

    onClose: () => {
      document.querySelector(".gallery").onclick;

      document.removeEventListener("keyup", e);
    },
  });
  instance.show();

  // А можна булоб так і так лаконічніше набагато

  // document.addEventListener("keydown", (e) => {
  //   if (e.code === "Escape") {
  //     instance.close();
  //     document.removeEventListener("keyup", e);
  //   }
  // });
}
