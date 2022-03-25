"""empty message

Revision ID: d84d36ccf2a2
Revises: 688abf9be264
Create Date: 2022-03-24 14:47:47.234610

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'd84d36ccf2a2'
down_revision = '688abf9be264'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('modelo',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=120), nullable=False),
     )
    op.create_table('marca',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=120), nullable=False),
     )
    op.create_table('tipo',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=120), nullable=False),
     )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('modelo')
    op.drop_table('marca')
    op.drop_table('tipo')
    
    # ### end Alembic commands ###
