

export default function Artwork({ artwork }) {
  

  return (
    <div className="ml-20 mr-20 mt-10 mb-10 p-5 bg-blue-400 rounded">
      <h3 className="text-2xl">{artwork.title}</h3>
      <img className="justify-center max-h-60 border-2 border-cyan-900" src={artwork.primaryImageSmall} />
      <ul>
        <li>
          <b>Credit: </b> {artwork?.creditLine}
        </li>
        <li>
          <b>Date: </b> {artwork?.objectDate}
        </li>
        <li>
          <b>Classification: </b> {artwork?.classification}
        </li>
        <li>
          <b>Medium: </b> {artwork?.medium}
        </li>
        <li>
          <b>Dimensions: </b> {artwork?.dimensions}
        </li>
        <li>
          <b>Department: </b> {artwork?.department}
        </li>
      </ul>
    </div>
  );
}
