import '../../../../globals.css'


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <title>My Site</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Doto:wght@100..900&family=Edu+AU+VIC+WA+NT+Pre:wght@400..700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        
      </head>
      <body>
        <div className="h-[1vh] bg-[rgb(255,255,255)]"></div>
        <div className="w-[100vw] flex flex-col items-center gap-14">{children}</div>
      </body>
    </html>
  )
}
