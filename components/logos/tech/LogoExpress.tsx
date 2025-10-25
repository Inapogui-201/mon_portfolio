export function LogoExpress({ ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" {...props}>
      <path
        fill="#000"
        d="M14.5 2.5h-13c-.3 0-.5.2-.5.5v10c0 .3.2.5.5.5h13c.3 0 .5-.2.5-.5V3c0-.3-.2-.5-.5-.5zM2 11V5h12v6H2zm11-4.5H3v1h10v-1zm-7 2H3v1h3v-1z"
      />
    </svg>
  )
}
