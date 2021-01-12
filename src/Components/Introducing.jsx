import React from 'react';

const introducing = ({
  mgt, imgurl, align,
  alt, title, desc,
  nd, st, oc, alturl, pb
}) => {
  return (
    <div type="button" onClick={
      () => { window.location.href = oc; }
    }>
      <hr
        style={{
          height: 5,
          backgroundColor: 'gray',
          marginTop: mgt
        }}
      />

      <div className="margin" style={{ paddingBottom: pb }}>
        <img src={imgurl} onError={e => {
          if (alturl) {
            e.target.onerror = s => s.target.alt = 'Something went wrong';
            e.target.src = alturl;
          } else e.target.alt = 'Something went wrong';
        }} align={align} alt={alt} style={{ maxWidth: '700px' }} />
        <p align={align === 'right' ? 'left' : 'right'} className="inb bold">{title}</p>
        <p className="inm" align={align === 'right' ? 'left' : 'right'} style={{ color: 'gray' }}>{desc}<br />{nd}{st ? <br /> : ''}{st}</p>
      </div>
    </div>
  );
};

export default introducing;