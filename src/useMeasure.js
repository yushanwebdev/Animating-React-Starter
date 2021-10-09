import { useRef, useState, useEffect } from "react";

export default function useMeasure() {
  const ref = useRef();
  const [bounds, set] = useState({ left: 0, top: 0, width: 0, height: 0 });
  const [ro] = useState(
    () => new ResizeObserver(([entry]) => set(entry.contentRect))
  );
  useEffect(() => {
    ro.observe(ref.current);
    return () => ro.unobserve(ref.current);
  }, []);
  return [{ ref }, bounds];
}
