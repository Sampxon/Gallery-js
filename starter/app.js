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
  console.log(element);
  this.list = [...element.querySelectorAll('.img')];
  console.log(this.list);
  //target
  this.modalEl = getElement('.modal');
  this.mainImgEl = getElement('.main-img');
  this.modalImagesEl = getElement('.modal-images');
  this.closeBtnEl = getElement('.close-btn');
  this.nextBtnEl = getElement('.next-btn');
  this.prevBtnEl = getElement('.prev-btn');
  //bind functions
  this.openModal = this.openModal.bind(this);
  this.container.addEventListener(
    'click',
    function (e) {
      this.openModal();
    }.bind(this)
  );
}

Photos.prototype.openModal = function () {
  console.log(this);
  this.modalEl.classList.add('open');
};

const nature = new Photos(getElement('.nature'));
const city = new Photos(getElement('.city'));

//HAVE UKPONO DO THIS WITH HIS METHOD
