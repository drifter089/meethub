import '../../../../globals.css'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <title>My Site</title>
      </head>
      <body>
        <div className="h-[10vh] bg-slate-400"></div>
        <div className="w-[100vw] flex flex-col items-center gap-8">{children}</div>
      </body>
    </html>
  )
}
