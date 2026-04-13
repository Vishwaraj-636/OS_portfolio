import React, { useState, useEffect, useRef } from 'react';
import { Rnd } from 'react-rnd';
import './window.scss';

const TITLEBAR_HEIGHT = 48;

let topZ = 100;

const MacWindow = ({ children, width = '40vw', height = '40vw', windowName, setwindowsState }) => {
    const rndRef = useRef();
    const [z, setZ] = useState(() => ++topZ);
    const [size, setSize] = useState({ width, height });
    const [position, setPosition] = useState({ x: 300, y: 200 });
    const [isMaximized, setIsMaximized] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const prevRef = useRef({ size: null, position: null });

    useEffect(() => {
        const onResize = () => {
            if (isMaximized) {
                setSize({ width: window.innerWidth - 20, height: window.innerHeight - 20 });
                setPosition({ x: 10, y: 10 });
            }
        };
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, [isMaximized]);

    const handleClose = () => setwindowsState((state) => ({ ...state, [windowName]: false }));

    const handleMaximize = () => {
        if (!isMaximized) {
            prevRef.current = { size: { ...size }, position: { ...position }, minimized: isMinimized };
            setPosition({ x: 10, y: 10 });
            setSize({ width: window.innerWidth - 20, height: window.innerHeight - 20 });
            setIsMaximized(true);
            setIsMinimized(false);
        } else {
            const prev = prevRef.current.size ? prevRef.current : { size, position };
            setSize(prev.size || { width, height });
            setPosition(prev.position || { x: 300, y: 200 });
            setIsMaximized(false);
            setIsMinimized(!!prevRef.current.minimized);
        }
    };

    const handleMinimize = () => {
        if (!isMinimized) {
            prevRef.current = { size: { ...size }, position: { ...position }, minimized: false };
            setSize((s) => ({ ...s, height: TITLEBAR_HEIGHT }));
            setIsMinimized(true);
            setIsMaximized(false);
        } else {
            const prev = prevRef.current.size || { width, height };
            setSize(prev);
            setIsMinimized(false);
        }
    };

    return (
        <Rnd
            ref={rndRef}
            style={{ zIndex: z }}
            size={{ width: size.width, height: size.height }}
            position={position}
            onMouseDown={() => {
                if (z !== topZ) setZ(++topZ);
            }}
            onDragStart={() => {
                if (isMaximized) setIsMaximized(false);
                if (z !== topZ) setZ(++topZ);
            }}
            onDragStop={(_, d) => setPosition({ x: d.x, y: d.y })}
            onResizeStart={() => {
                if (isMaximized) setIsMaximized(false);
                if (z !== topZ) setZ(++topZ);
            }}
            onResizeStop={(_, __, ref, ___, delta) => {
                if (isMaximized) setIsMaximized(false);
                const newW = ref.style.width;
                const newH = ref.style.height;
                setSize({ width: newW, height: newH });
                if (z !== topZ) setZ(++topZ);
            }}
            minWidth={isMinimized ? 140 : 220}
            minHeight={isMinimized ? TITLEBAR_HEIGHT : 120}
            bounds="window"
            enableResizing={
                !isMinimized
                    ? {
                        top: true,
                        right: true,
                        bottom: true,
                        left: true,
                        topRight: true,
                        bottomRight: true,
                        bottomLeft: true,
                        topLeft: true,
                    }
                    : false
            }
            dragHandleClassName="nav"
            className="mac-rnd"
        >
            <div
                onMouseDown={() => {
                    if (z !== topZ) setZ(++topZ);
                }}
                className={`window ${isMinimized ? 'minimized' : ''} ${isMaximized ? 'maximized' : ''}`}
            >
                <div className="nav">
                    <div className="dots">
                        <div onClick={handleMinimize} className="dot minus" title="Minimize"></div>
                        <div onClick={handleMaximize} className="dot square" title="Maximize"></div>
                        <div onClick={handleClose} className="dot cross" title="Close"></div>
                    </div>
                </div>
                <div className="main-content" style={{ display: isMinimized ? 'none' : 'block' }}>
                    {children}
                </div>
            </div>
        </Rnd>
    );
};

export default MacWindow;