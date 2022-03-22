const mapper = ({
  id,
  title,
  description,
  photo_urls,
  created_by,
  created_on,
}) => {
  return {
    id,
    title,
    description,
    photoUrls: photo_urls,
    createdBy: created_by,
    createdOn: created_on,
  };
};

module.exports = mapper;
