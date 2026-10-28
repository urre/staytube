const defaultImage =
  'https://res.cloudinary.com/urre/image/upload/v1495467361/epvi1qppu4y7llo0hmmw.png'

// React 19 hoists <title> and <meta> into <head>
const Meta = ({
  title,
  ogTitle = title,
  description,
  image = defaultImage,
}) => (
  <>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={ogTitle} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
  </>
)

export default Meta
