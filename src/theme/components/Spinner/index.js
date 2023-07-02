/* const styles = {
    '*': {
        boxSizing: 'border-box',
    },
    html: {
        width: '100%',
        height: '100%',
    },
    body: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#2a2c2e',
    },
    circles: {
        width: '50vmin',
        height: '50vmin',
        position: 'relative',
        perspective: '50000px',
        color: '#61dafb',
    },
    'circles span': {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'block',
        width: '18.4%',
        height: '18.4%',
        borderRadius: '100%',
        background: 'currentColor',
    },
    'circles div': {
        position: 'absolute',
        width: '100%',
        height: '100%',
        borderLeft: '2vmin solid',
        borderTop: '2vmin solid transparent',
        borderRadius: '100%',
    },
    'circles div:nth-child(1)': {
        WebkitAnimation: 'anim-1 1s linear infinite',
        animation: 'anim-1 1s linear infinite',
    },
    'circles div:nth-child(2)': {
        WebkitAnimation: 'anim-2 1s linear infinite',
        animation: 'anim-2 1s linear infinite',
    },
    'circles div:nth-child(3)': {
        WebkitAnimation: 'anim-3 1s linear infinite',
        animation: 'anim-3 1s linear infinite',
    },
    '@-webkit-keyframes anim-1': {
        from: {
            transform: 'rotateZ(120deg) rotateX(66deg) rotateZ(0deg)',
        },
        to: {
            transform: 'rotateZ(120deg) rotateX(66deg) rotateZ(360deg)',
        },
    },
    '@keyframes anim-1': {
        from: {
            transform: 'rotateZ(120deg) rotateX(66deg) rotateZ(0deg)',
        },
        to: {
            transform: 'rotateZ(120deg) rotateX(66deg) rotateZ(360deg)',
        },
    },
    '@-webkit-keyframes anim-2': {
        from: {
            transform: 'rotateZ(240deg) rotateX(66deg) rotateZ(0deg)',
        },
        to: {
            transform: 'rotateZ(240deg) rotateX(66deg) rotateZ(360deg)',
        },
    },
    '@keyframes anim-2': {
        from: {
            transform: 'rotateZ(240deg) rotateX(66deg) rotateZ(0deg)',
        },
        to: {
            transform: 'rotateZ(240deg) rotateX(66deg) rotateZ(360deg)',
        },
    },
    '@-webkit-keyframes anim-3': {
        from: {
            transform: 'rotateZ(360deg) rotateX(66deg) rotateZ(0deg)',
        },
        to: {
            transform: 'rotateZ(360deg) rotateX(66deg) rotateZ(360deg)',
        },
    },
    '@keyframes anim-3': {
        from: {
            transform: 'rotateZ(360deg) rotateX(66deg) rotateZ(0deg)',
        },
        to: {
            transform: 'rotateZ(360deg) rotateX(66deg) rotateZ(360deg)',
        },
    },
};
 */
export const Spinner = ({ size = 'lg' }) => {
  const sizes = {
    sm: {
      width: '20vmin',
      height: '20vmin',
    },
    md: {
      width: '30vmin',
      height: '30vmin',
    },
    lg: {
      width: '50vmin',
      height: '50vmin',
    },
  }

  const sizeStyles = sizes[size];
  
  const styles = `
    .circles {
      width: ${sizeStyles.width};
      height: ${sizeStyles.height};
      position: relative;
      perspective: 50000px;
      color: #61dafb;
      display: block;
      margin: auto;
    }
  
    .circles span {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: block;
      width: 18.4%;
      height: 18.4%;
      border-radius: 100%;
      background: currentColor;
    }
  
    .circles div {
      position: absolute;
      width: 100%;
      height: 100%;
      border-left: 2vmin solid;
      border-top: 2vmin solid transparent;
      border-radius: 100%;
    }
  
    .circles div:nth-child(1) {
      -webkit-animation: anim-1 1s linear infinite;
      animation: anim-1 1s linear infinite;
    }
  
    .circles div:nth-child(2) {
      -webkit-animation: anim-2 1s linear infinite;
      animation: anim-2 1s linear infinite;
    }
  
    .circles div:nth-child(3) {
      -webkit-animation: anim-3 1s linear infinite;
      animation: anim-3 1s linear infinite;
    }
  
    @-webkit-keyframes anim-1 {
      from {
        transform: rotateZ(120deg) rotateX(66deg) rotateZ(0deg);
      }
  
      to {
        transform: rotateZ(120deg) rotateX(66deg) rotateZ(360deg);
      }
    }
  
    @keyframes anim-1 {
      from {
        transform: rotateZ(120deg) rotateX(66deg) rotateZ(0deg);
      }
  
      to {
        transform: rotateZ(120deg) rotateX(66deg) rotateZ(360deg);
      }
    }
  
    @-webkit-keyframes anim-2 {
      from {
        transform: rotateZ(240deg) rotateX(66deg) rotateZ(0deg);
      }
  
      to {
        transform: rotateZ(240deg) rotateX(66deg) rotateZ(360deg);
      }
    }
  
    @keyframes anim-2 {
      from {
        transform: rotateZ(240deg) rotateX(66deg) rotateZ(0deg);
      }
  
      to {
        transform: rotateZ(240deg) rotateX(66deg) rotateZ(360deg);
      }
    }
  
    @-webkit-keyframes anim-3 {
      from {
        transform: rotateZ(360deg) rotateX(66deg) rotateZ(0deg);
      }
  
      to {
        transform: rotateZ(360deg) rotateX(66deg) rotateZ(360deg);
      }
    }
  
    @keyframes anim-3 {
      from {
        transform: rotateZ(360deg) rotateX(66deg) rotateZ(0deg);
      }
  
      to {
        transform: rotateZ(360deg) rotateX(66deg) rotateZ(360deg);
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div className="circles">
        <div></div>
        <div></div>
        <div></div>
        <span></span>
      </div>
    </>
  );
};


