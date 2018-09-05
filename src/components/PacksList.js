import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import PackItem from './PackItem';
import Heading from '../elements/Heading';

const Container = styled.section`
  background-color: ${props => props.bgColor};
  height: auto;
  padding: 3%;

  li > a {
    color: #5a6175 !important;
    font-size: 1.5625rem;
  }
  ul {
    line-height: 2.5rem;
    padding-top: 4.8%;
  }
  .slick-prev {
    left: -50px;
    top: -15%;
    width: 2%;
    height: 40px;
    margin-left: 95%;
    @media screen and (max-width: 430px) {
      top: -6%;
    }
  }
  .slick-next {
    right: 7px;
    top: -15%;
    width: 2%;
    height: 40px;
    @media screen and (max-width: 430px) {
      top: -6%;
    }
  }
`;

const HeadingStyled = styled(Heading)`
  padding-bottom: 2.5rem;
  @media screen and (max-width: 375px) {
    padding-top: 2.5rem;
    padding-left: 1rem;
    @media screen and (min-width: 768px) and (max-width: 1024px) {
      margin-left: 15%;
      padding-top: 4rem;
    }
  }
`;

export default class PacksList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { settings: {} };
  }

  componentDidMount() {
    const self = this;
    window.onresize = function() {
      self.loadSliderSettings();
    };

    this.loadSliderSettings();
  }

  loadSliderSettings() {
    let slidesToShow = 4;

    if (window.innerWidth < 500) {
      slidesToShow = 1;
    } else if (window.innerWidth < 815) {
      slidesToShow = 3;
    } else {
      slidesToShow = 4;
    }
    console.log('slidesToShow', window.innerWidth, slidesToShow);

    this.setState({
      settings: {
        onReInit: () => {
          console.log('onReInit');
        },
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
        nextArrow: <img src="/images/next.svg" alt="next-arrow" />,
        prevArrow: <img src="/images/prev.svg" alt="prev-arrow" />,
      },
    });
  }

  render() {
    const { title, bgColor, packs } = this.props;
    const { settings } = this.state;

    return (
      <Container className="section" bgColor={bgColor}>
        <div className="container">
          <h1 className="has-text-grey">
            <HeadingStyled>{title}</HeadingStyled>
          </h1>
          <Slider {...settings}>
            {packs.map(pack => <PackItem key={pack.id} item={pack} />)}
          </Slider>
        </div>
      </Container>
    );
  }
}
