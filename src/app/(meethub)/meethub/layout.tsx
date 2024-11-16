import '../../../../globals.css'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <title>My Site</title>
      </head>
      <body>
        <div className="top-10 bg-slate-400">sdjkhvbbds</div>
        {children}
      </body>
    </html>
  )
}
