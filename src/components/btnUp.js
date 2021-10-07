import React from 'react';

export const BtnUp = () => {

  function handleScroll() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  return <button type="button" className="btnUP fs-3 p-0" onClick={handleScroll}><i className="far fa-arrow-alt-circle-up"></i></button>;

}