/**
 * Author: Mayur
 * Controller for the whiteboard
 */

import service from '../../service/v1/whiteboard.service';

import Joi from 'joi';

const getById = (req, res) => {
  const schema = Joi.object().keys({
    whiteboard_id: Joi.string().required().label('whiteboard_id'),
  });

  const { error } = schema.validate(req.params);

  if (error) {
    return res.status(500).json({
      status: 500,
      message: error.details[0].message,
    });
  }

  service.getById(req.params.whiteboard_id, (error, data) => {
    if (error) {
      res.json(error);
    }
    res.json({
      data,
    });
  });
};

const list = (req, res) => {
  service.list((error, data) => {
    if (error) {
      res.json(error);
    }

    res.json({
      data,
    });
  });
};

const create = (req, res) => {
  const schema = Joi.object().keys({
    title: Joi.string().required(),
    hidden: Joi.boolean(),
    user_id: Joi.string(),
    data: Joi.object().required().label('Data'),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(500).json({
      status: 500,
      message: error.details[0].message,
    });
  }

  service.create(req.body, (error, data) => {
    const resDate = Math.floor(new Date());
    if (error) {
      console.log(error);
      res.json(error);
    }
    res.status(200).json(data);
  });
};

const update = (req, res) => {
  const schema = Joi.object().keys({
    whiteboard_id: Joi.string().required(),
    title: Joi.string().required(),
    hidden: Joi.boolean(),
    user_id: Joi.string(),
    data: Joi.object().required(),
  });

  const { error } = schema.validate(Object.assign(req.params, req.body));

  if (error) {
    return res.status(500).json({
      status: 500,
      message: error.details[0].message,
    });
  }

  service.update(req.params.whiteboard_id, req.body, (error, data) => {
    if (error) {
      console.log(error);
      res.json(error);
    }
    res.status(200).json(data);
  });
};

const deleteById = (req, res) => {
  const schema = Joi.object().keys({
    whiteboard_id: Joi.string().required().label('whiteboard_id'),
  });

  const { error } = schema.validate(req.params);

  if (error) {
    return res.status(500).json({
      status: 500,
      message: error.details[0].message,
    });
  }

  service.remove(req.params.whiteboard_id, (error, data) => {
    if (error) {
      res.json(error);
    }
    res.status(200).json({
      data: data ? 'Deleted Successfully' : 'Nothing to delete',
    });
  });
};

// This will be integrated in future, IF NEEDED
const hideById = (req, res) => {
  req.json({
    hideById: req.params,
  });
};

export default {
  getById,
  list,
  create,
  update,
  deleteById,
  hideById,
};
