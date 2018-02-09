package ru.naumen.easyplanning.model.service;

import ru.naumen.easyplanning.model.dao.DefaultDAO;

import java.io.Serializable;
import java.util.List;

public class DefaultService<Id, Entity extends Serializable> implements IDefaultService<Id, Entity> {

    private final DefaultDAO<Id, Entity> dao;

    DefaultService(DefaultDAO<Id, Entity> dao) {
        this.dao = dao;
    }

    @Override
    public List<Entity> list() {
        return dao.list();
    }

    @Override
    public Entity getById(Id id) {
        return dao.getById(id);
    }

    @Override
    public void save(Entity entity) {
        dao.save(entity);
    }

    @Override
    public void update(Entity entity) {
        dao.update(entity);
    }

    @Override
    public void delete(Entity entity) {
        dao.delete(entity);
    }
}
