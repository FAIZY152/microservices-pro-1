export const createComment = async (req, res) => {
  try {
    const { comment } = req.body;
  } catch (error) {}
};

export const GetCommentsBySnippetId = async (req, res) => {
  try {
    const { id } = req.params;
  } catch (error) {}
};
