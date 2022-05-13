"""empty message

Revision ID: f9d55e2ab4e0
Revises: 5a1508ed42ff
Create Date: 2022-05-13 14:05:38.998035

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'f9d55e2ab4e0'
down_revision = '5a1508ed42ff'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('provincia',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=120), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('ciudad',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=120), nullable=False),
    sa.Column('provincia_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['provincia_id'], ['provincia.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.add_column('moto', sa.Column('city_id', sa.Integer(), nullable=True))
    op.create_foreign_key(None, 'moto', 'ciudad', ['city_id'], ['id'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'moto', type_='foreignkey')
    op.drop_column('moto', 'city_id')
    op.drop_table('ciudad')
    op.drop_table('provincia')
    # ### end Alembic commands ###