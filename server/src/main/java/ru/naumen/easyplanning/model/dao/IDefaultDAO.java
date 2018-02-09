package ru.naumen.easyplanning.model.dao;

import java.io.Serializable;
import java.util.List;

public interface IDefaultDAO<Id, Entity extends Serializable> {

    Entity getById(Id id);

    List<Entity> list();

    void save(Entity entity);

    void update(Entity entity);

    void delete(Entity entity);

}
