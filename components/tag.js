import useRouter from 'next/router';

export default function Tag({ children, route, bg, border, whitespace }) {
  const {router} = useRouter;

  const TagRoute = () => {
    router.push({
      pathname: `/${route}`,
    })
  }

  return (
    <span className={`${whitespace && whitespace} capitalize font-rubik_light px-4 py-2  inline-flex text-sm cursor-pointer border-dashed rounded-full border-[1px] hover:shadow-lg ${bg ? bg : 'bg-[#F2F2F2]'} ${border && border}`} onClick={TagRoute}>{children}</span>
  )
}
