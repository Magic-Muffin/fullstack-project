import React, {useState, useRef} from 'react';
import { Button, Overlay } from 'react-bootstrap';

interface Props {
  show: boolean;
  callback: (arg: boolean) => void
}

const AppOverlay: React.FC<Props> = (props: Props) => {
    const [show, setShow] = useState<boolean>(props.show);
    const el = useRef<any>(null);
    const onButtonClick = () => {
  
      if(el && el.current) {
        setShow(!show);
      } 
    };

    return(
        <>
        <Button variant="danger" ref={el} onClick={onButtonClick}>
          Click me to see
        </Button>
        <Overlay target={el.current} show={show} placement="right">
          {({
            placement,
            scheduleUpdate,
            arrowProps,
            outOfBoundaries,
            show: _show,
            ...props
          }) => (
            <div
              {...props}
              style={{
                backgroundColor: 'rgba(255, 100, 100, 0.85)',
                padding: '2px 10px',
                color: 'white',
                borderRadius: 3,
                ...props.style,
              }}
            >
              Simple tooltip
            </div>
          )}
        </Overlay>
      </>
    );
}

export default AppOverlay;