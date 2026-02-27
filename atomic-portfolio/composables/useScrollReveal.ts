export function useScrollReveal() {
  onMounted(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            Array.from(entry.target.children).forEach((child, i) => {
              setTimeout(() => {
                (child as HTMLElement).classList.add('revealed')
              }, i * 80)
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.05 }
    )

    document.querySelectorAll('.stagger').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  })
}
