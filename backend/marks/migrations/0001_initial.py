# Generated by Django 3.1.12 on 2024-12-16 15:20

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Marks',
            fields=[
                ('marksId', models.AutoField(primary_key=True, serialize=False)),
                ('studentId', models.CharField(max_length=100)),
                ('Course', models.CharField(max_length=100)),
                ('Marks', models.CharField(max_length=2)),
            ],
        ),
    ]