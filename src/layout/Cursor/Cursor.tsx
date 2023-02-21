import { useRef , useEffect} from 'react';
// import './App.css';

const Cursor = () => {

	const delay = 18;

	const dot = useRef<HTMLDivElement>(null);
	const dotOutline = useRef<HTMLDivElement>(null);

	const cursorVisible = useRef(true);
	const cursorEnglared = useRef(false);

	const endX = useRef(window.innerWidth / 2);
	const endY = useRef(window.innerHeight / 2);
	const _x = useRef(0);
	const _y = useRef(0);

	const requestRef = useRef(0);


	useEffect(() => {
		document.addEventListener('mousedown', mouseOverEvent);
		document.addEventListener('mouseup', mouseOutEvent);
		document.addEventListener('mousemove', mouseMoveEvent);
		document.addEventListener('mouseenter', mouseEnterEvent);
		document.addEventListener('mouseleave', mouseLeaveEvent);

		animateDotOutLine();

		return () => {
			document.removeEventListener('mousedown', mouseOverEvent);
			document.removeEventListener('mouseup', mouseOutEvent);
			document.removeEventListener('mousemove', mouseMoveEvent);
			document.removeEventListener('mouseenter', mouseEnterEvent);
			document.removeEventListener('mouseleave', mouseLeaveEvent);

			cancelAnimationFrame(requestRef.current);
		}
	}, []);


	const toggleCursorVisibility = () => {
		if (dot.current !== null && dotOutline.current !== null) {
			if (cursorVisible.current) {
				dot.current.style.opacity = '1';
				dotOutline.current.style.opacity = '1';
			} else {
				dot.current.style.opacity = '0';
				dotOutline.current.style.opacity = '0';
			}
		}
	
	}


	const toggleCursorSize = () => {
		if (dot.current !== null && dotOutline.current !== null) {
			if (cursorEnglared.current) {
				dot.current.style.transform = 'translate(-50%, -50% scale(0.75)';
				dotOutline.current.style.transform = 'translate(-50%, -50% scale(1.5)';
			} else {
				dot.current.style.transform = 'translate(-50%, -50% scale(1)';
				dotOutline.current.style.transform = 'translate(-50%, -50% scale(1)';
			}
		}
	
	}

	const mouseOverEvent = () => {
		cursorEnglared.current = true;
		toggleCursorSize();
	}
	const mouseOutEvent = () => {
		cursorEnglared.current = false;
		toggleCursorSize();
	}
	const mouseEnterEvent = () => {
		cursorEnglared.current = true;
		toggleCursorVisibility();
	}

	const mouseLeaveEvent = () => {
		cursorVisible.current = true;
		toggleCursorVisibility();
	}

	const mouseMoveEvent = (e: any) => {
		cursorVisible.current = true;
		toggleCursorVisibility();

		endX.current = e.pageX;
		endY.current = e.pageY;
		if (dot.current !== null && dotOutline.current !== null) {
			dot.current.style.top = endY.current + 'px';
			dot.current.style.left = endX.current + 'px';
		}

	}

	const animateDotOutLine = () => {
		_x.current += (endX.current - _x.current) / delay;
		_y.current += (endY.current - _y.current) / delay;

		if (dot.current !== null && dotOutline.current !== null) {
			dotOutline.current.style.top = _y.current + 'px';
			dotOutline.current.style.left = _x.current + 'px';
		}


		requestRef.current = requestAnimationFrame(animateDotOutLine);
	}

	return (
		<>
			<div ref={dotOutline} className="cursor-dot-outline"></div>
			<div ref={dot} className="cursor-dot"></div>
		</>
	);
}

export default Cursor;