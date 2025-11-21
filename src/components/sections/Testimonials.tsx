import { useEffect, useRef } from "react";
import { testimonials } from "../../data/programs";

const WHATSAPP_LINK =
  "https://chat.whatsapp.com/KxbLoI3YCo40TEsNFB24rc?mode=wwt";

export default function Testimonials() {
  const sliderRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    sliderRefs.current.forEach((slider, i) => {
      if (!slider) return;

      const cards = slider.querySelectorAll(".review-card:not(.clone)");
      if (!cards.length) return;

      // Store slider reference to avoid null checks in nested functions
      const sliderElement = slider;

      const gap = 8;
      const cardWidth = (cards[0] as HTMLElement).offsetWidth + gap;
      let currentTranslate = 0;
      let prevTranslate = 0;
      let isDragging = false;
      let startPos = 0;
      let animationID: number;
      let isAutoScrolling = true;

      const direction = i % 2 === 0 ? 1 : -1;
      const autoScrollSpeed = 0.5 * direction;

      function extendClones(side: "left" | "right" | "both" = "both") {
        const originals = Array.from(
          sliderElement.querySelectorAll(".review-card:not(.clone)")
        );

        if (side === "right" || side === "both") {
          originals.forEach((card) => {
            const clone = card.cloneNode(true) as HTMLElement;
            clone.classList.add("clone");
            sliderElement.appendChild(clone);
          });
        }
        if (side === "left" || side === "both") {
          originals
            .slice()
            .reverse()
            .forEach((card) => {
              const clone = card.cloneNode(true) as HTMLElement;
              clone.classList.add("clone");
              sliderElement.prepend(clone);
            });
        }
      }

      extendClones("both");

      function getX(e: MouseEvent | TouchEvent) {
        return "touches" in e ? e.touches[0].clientX : e.pageX;
      }

      function startDrag(e: MouseEvent | TouchEvent) {
        isDragging = true;
        startPos = getX(e);
        cancelAnimationFrame(animationID);
        isAutoScrolling = false;
        sliderElement.style.cursor = "grabbing";
      }

      function handleDrag(e: MouseEvent | TouchEvent) {
        if (!isDragging) return;
        const cur = getX(e);
        currentTranslate = prevTranslate + cur - startPos;
        sliderElement.style.transform = `translateX(${currentTranslate}px)`;
        maybeExtend();
      }

      function endDrag() {
        if (!isDragging) return;
        isDragging = false;
        sliderElement.style.cursor = "grab";
        prevTranslate = currentTranslate;
        isAutoScrolling = true;
        startAutoScroll();
      }

      sliderElement.addEventListener("mousedown", startDrag);
      sliderElement.addEventListener("mousemove", handleDrag);
      sliderElement.addEventListener("mouseup", endDrag);
      sliderElement.addEventListener("mouseleave", endDrag);
      sliderElement.addEventListener("touchstart", startDrag as EventListener, {
        passive: false,
      });
      sliderElement.addEventListener("touchmove", handleDrag as EventListener, {
        passive: false,
      });
      sliderElement.addEventListener("touchend", endDrag);

      function maybeExtend() {
        const sliderRect = sliderElement.getBoundingClientRect();
        if (sliderRect.right < window.innerWidth * 2) {
          extendClones("right");
        }
        if (sliderRect.left > -window.innerWidth) {
          extendClones("left");
          currentTranslate -= cardWidth * cards.length;
          prevTranslate = currentTranslate;
          sliderElement.style.transform = `translateX(${currentTranslate}px)`;
        }
      }

      function startAutoScroll() {
        let last = performance.now();
        function animate() {
          const now = performance.now();
          const delta = now - last;
          last = now;

          if (!isDragging && isAutoScrolling) {
            currentTranslate += autoScrollSpeed * (delta / 16);
            prevTranslate = currentTranslate;
            sliderElement.style.transform = `translateX(${currentTranslate}px)`;
            maybeExtend();
          }
          animationID = requestAnimationFrame(animate);
        }
        animate();
      }

      sliderElement
        .querySelectorAll("img")
        .forEach((img) =>
          img.addEventListener("dragstart", (e) => e.preventDefault())
        );
      startAutoScroll();
    });
  }, []);

  const blocksPerSlider = Math.ceil(testimonials.length / 3);

  return (
    <section className="relative section-spacing overflow-hidden pt-24 pb-24">
      {/* Blurred accent backgrounds - with padding from top */}
      <div className="blur-accent-left top-[100px] left-[-300px]" />
      <div className="blur-accent-right bottom-[100px] right-[-300px]" />

      <div className="container-padding relative z-10">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
          Let The Results Do The Talking...
        </h2>

        {/* Reviews Container */}
        <div className="reviews-container mt-8">
          {[0, 1, 2].map((i) => (
            <div key={i} className="reviews-slider-wrapper mb-2">
              <div
                ref={(el) => {
                  sliderRefs.current[i] = el;
                }}
                className="reviews-slider"
              >
                {testimonials
                  .slice(i * blocksPerSlider, (i + 1) * blocksPerSlider)
                  .map((review) => (
                    <div key={review.id} className="review-card">
                      <div className="customer-identity">
                        {review.customer_image ? (
                          <img
                            className="customer-image"
                            src={review.customer_image}
                            alt={review.name}
                          />
                        ) : (
                          <img
                            className="customer-image"
                            src="https://cdn.shopify.com/s/files/1/0661/1661/6275/files/placeholder.webp"
                            alt={review.name}
                          />
                        )}
                        <div className="customer-name">
                          {review.name || "Customer"}
                          <p className="customer-state text-[#df1124]">
                            {review.state || "Verified Student"}
                          </p>
                        </div>
                      </div>

                      <div className="card-body">
                        {review.image ? (
                          <img
                            className="review-image"
                            src={review.image}
                            alt={review.name}
                            draggable="false"
                          />
                        ) : review.description ? (
                          <p className="review__description">
                            {review.description}
                          </p>
                        ) : null}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-lg text-gray-400 mt-12 font-medium">
          Yours can be the next one.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center mt-8">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-[#df1124] to-[#f03d4e] text-white text-sm md:text-lg font-bold px-6 md:px-10 py-2.5 md:py-4 rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-[#df1124]/30"
          >
            JOIN THE WHATSAPP GROUP
          </a>
        </div>
      </div>
    </section>
  );
}
