(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-open]"),
      closeModalBtn: document.querySelector("[data-close]"),
      modal: document.querySelector("[data-modal1]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-visible");
    }
  })();