const mongoose = require("mongoose");

const Tool = mongoose.model("Tool");

module.exports = {
  async index(req, res) {
    const tag = req.query.tag;
    if (tag) {
      const tool = await Tool.find({ tags: { $in: [tag] } });
      return res.json(tool);
    } else {
      const page = req.query.page;
      const tools = await Tool.paginate({}, { page, limit: 10 });
      return res.json(tools);
    }
  },

  async show(req, res) {
    const tag = req.query.tag;
    const tool = await Tool.find({ tags: { $in: [tag] } });
    return res.json(tool);
  },

  async store(req, res) {
    const tool = await Tool.create(req.body);

    return res.json(tool);
  },

  async update(req, res) {
    const tool = await Tool.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    return res.json(tool);
  },

  async destroy(req, res) {
    await Tool.findByIdAndRemove(req.params.id);

    return res.send();
  }
};
