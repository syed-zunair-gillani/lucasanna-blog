import { useEffect, useRef, useState } from "react";

type TOSType = {
  selector: string;
};

export const TOC = ({ selector }: TOSType) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentHeadingID, setCurrentHeadingID] = useState<
    string | undefined
  >();

  const listWrapperRef = useRef<HTMLDivElement>(null);

  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closeListWrapper = (e: any) => {
      if (!wrapperRef.current?.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", closeListWrapper, true);
    return () => {
      document.removeEventListener("click", closeListWrapper, true);
    };
  }, []);

  const [headings, setHeadings] = useState<HTMLHeadElement[]>([]);
  useEffect(() => {
    const headingNodeList = document
      .querySelector(selector)!?.querySelectorAll("h2") as NodeListOf<HTMLHeadElement>;

    if (headingNodeList?.length) {
      const headingArray = Array.from(headingNodeList);
      headingArray.forEach((el) => {
        el.dataset.id = Math.round(Math.random() * 100000).toString();
      });
      setHeadings(headingArray);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // if (entry.intersectionRatio > 0.9) {
          // console.log(entry.target.innerHTML, entry.intersectionRatio);
          if (entry.isIntersecting && entry.intersectionRatio >= 1) {
            setCurrentHeadingID((entry.target as HTMLHeadElement).dataset.id);
          }
        });
      },
      {
        rootMargin: "0% 0% -60% 0%",
        threshold: 1,
      }
    );

    if (headings.length) {
      headings.forEach((s) => {
        observer.observe(s);
      });
    }

    return () => {
      return observer.disconnect();
    };
  }, [headings?.length]);

  useEffect(() => {
    const element = listWrapperRef.current?.querySelector(
      'button[data-id="' + currentHeadingID + '"]'
    );

    if (currentHeadingID && element) {
      listWrapperRef.current?.scrollTo({
        top: (element as HTMLElement).offsetTop,
        behavior: "smooth",
      });
    }
  }, [currentHeadingID]);

  return (
    <div
      className="bg-neutral-100 py-1 text-sm mt-3"
      ref={wrapperRef}
    >
      <div ref={listWrapperRef}>
        {headings.map((heading) => {
          return (
            <div
              key={heading.dataset.id}
              className={`flex w-full py-2 pr-2 cursor-pointer px-4 font-light rounded-sm font-rubik_regular ${
                currentHeadingID === heading.dataset.id
                  ? "bg-[#202121] text-white"
                  : "hover:bg-gray-100 "
              }`}
              title={heading.innerHTML}
              data-id={heading.dataset.id}
              onClick={() => {
                window.scrollTo({
                  top:
                    heading.getBoundingClientRect().top + window.scrollY - 60,
                  behavior: "smooth",
                });
              }}
              dangerouslySetInnerHTML={{__html: heading.innerHTML}}
            >
              
            </div>
          );
        })}
      </div>
    </div>
  );
};
