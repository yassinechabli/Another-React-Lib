import React from 'react';
​
export default ({
  HeaderFontColor,
  HeaderFontSize,
  HeaderFontFamily,
  Header,
  subHeaderFontColor,
  subHeaderFontSize,
  subHeaderFontFamily,
  subHeader,
  dateFontColor,
  dateFontSize,
  dateFontFamily,
  tags,
  showTags = false,
  date,
  showDate = false,
  backgroundImage,
  borderColor,
  borderWidth,
  borderRadius,
  onClick
}) => {
  return (
    <div>
      <div className='card-grid-space'>
        <a
          target='_blank'
          className='card'
          href={`${onClick}`}
          style={{
            backgroundImage: `url(${backgroundImage})`,
            borderColor,
            borderWidth,
            borderRadius
          }}
        >
          <div>
            <h1
              style={{
                color: HeaderFontColor,
                fontSize: HeaderFontSize,
                fontFamily: HeaderFontFamily
              }}
            >
              {Header}
            </h1>
            <p
              style={{
                color: subHeaderFontColor,
                fontSize: subHeaderFontSize,
                fontFamily: subHeaderFontFamily
              }}
            >
              {subHeader}
            </p>
            {showDate && (
              <div
                className='date'
                style={{
                  color: dateFontColor,
                  fontSize: dateFontSize,
                  fontFamily: dateFontFamily
                }}
              >
                {date}
              </div>
            )}
            <div className='tags'>
              {showTags &&
                tags.map((tag, index) => (
                  <div className='tag' key={index}>
                    {tag}
                  </div>
                ))}
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};
