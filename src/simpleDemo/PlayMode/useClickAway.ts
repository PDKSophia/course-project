import { useEffect, useRef, useState } from 'react';

/**
 * @description 点击元素之外区域关闭
 */
interface IProps {
  initIsVisible: boolean;
  onClickOutElement?: () => void; // 点击元素外的操作
}
function useClickAway(props: IProps) {
  const ref = useRef() as React.MutableRefObject<HTMLDivElement>;
  const [componentVisible, setComponentVisible] = useState(props?.initIsVisible);

  const onClickOutSide = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setComponentVisible(false);
      props?.onClickOutElement?.();
    }
  };

  useEffect(() => {
    document.addEventListener('click', onClickOutSide, true);
    return () => {
      document.removeEventListener('click', onClickOutSide, true);
    };
  });

  return { ref, componentVisible, setComponentVisible };
}

export default useClickAway;
