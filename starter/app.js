console.log('vibes');

function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(
    `Please check "${selection}" selector, no such element exists`
  );
}

function Photos(element) {
  this.container = element;
  // console.log(element);
  this.list = [...element.querySelectorAll('.img')];
  // console.log(this.list);
  //target
  this.modalEl = getElement('.modal');
  this.mainImgEl = getElement('.main-img');
  this.modalImagesEl = getElement('.modal-images');
  this.imageName = getElement('.image-name');
  this.closeBtnEl = getElement('.close-btn');
  this.nextBtnEl = getElement('.next-btn');
  this.prevBtnEl = getElement('.prev-btn');
  //self refereance
  //let self = this
  //bind functions
  // this.openModal = this.openModal.bind(this);
  this.container.addEventListener(
    'click',
    function (e) {
      if (e.target.classList.contains('img')) {
        this.openModal(e.target, this.list);
      }
    }.bind(this)
  );
}

Photos.prototype.openModal = function (selectedImage, list) {
  this.setMainImage(selectedImage);
  console.log(selectedImage, list);
  this.modalEl.classList.add('open');
};

Photos.prototype.setMainImage = function (selectedImage) {
  this.mainImgEl.src = selectedImage.src;
  this.imageName.textContent = selectedImage.title;
};

const nature = new Photos(getElement('.nature'));
const city = new Photos(getElement('.city'));

//HAVE UKPONO DO THIS WITH HIS METHOD
//l
