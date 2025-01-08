import React, { useState, useRef, useEffect } from 'react'

const LazyImage = ({ src, alt, placeholder = "#f0f0f0", ...props }) => {
    const [isVisible, setIsVisible] = useState(false);
    const imgRef = useRef();

    //observer ile lazy loading işlemini useEffect hook'u ile yazdık bro.
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );
        if (imgRef.current) {
            observer.observe(imgRef.current);
        }
        return () => observer.disconnect();
    }, [])


    return (
        <img
            ref={imgRef}
            src={isVisible ? src : ""}
            alt={alt}
            {...props}//asd
        />
    );
}
export default LazyImage;
