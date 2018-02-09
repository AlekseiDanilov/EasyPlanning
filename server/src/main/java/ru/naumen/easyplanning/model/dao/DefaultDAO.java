package ru.naumen.easyplanning.model.dao;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.io.Serializable;
import java.lang.reflect.ParameterizedType;
import java.util.List;

public class DefaultDAO<Id, Entity extends Serializable> implements IDefaultDAO<Id, Entity> {

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public Entity getById(Id id) {
        return this.entityManager.find(getEntityClass(), id);
    }

    @Override
    public List<Entity> list() {
        return entityManager
                .createQuery(("FROM " + getEntityClass().getName()), getEntityClass())
                .getResultList();
    }

    @Override
    public void save(Entity entity) {
        entityManager.persist(entity);
    }

    @Override
    public void update(Entity entity) {
        entityManager.merge(entity);
    }

    @Override
    public void delete(Entity entity) {
        entityManager.remove(entity);
    }

    private Class<Entity> getEntityClass() {
        ParameterizedType genericSuperclass = (ParameterizedType) getClass().getGenericSuperclass();
        return (Class<Entity>) genericSuperclass.getActualTypeArguments()[1];
    }
}